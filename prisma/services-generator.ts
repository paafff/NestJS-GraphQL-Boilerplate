import {
  readFileSync,
  writeFileSync,
  readdirSync,
  mkdirSync,
  existsSync,
  statSync,
  renameSync,
} from 'fs';
import { join } from 'path';

// Extract model names from the Prisma schema
function extractModelsFromSchema(schemaPath: string): string[] {
  const schemaContent = readFileSync(schemaPath, 'utf-8');
  const modelMatches = schemaContent.match(/model\s+(\w+)\s+{/g) || [];
  return modelMatches.map((model) => model.split(' ')[1]);
}

// Duplicate a template file with model name replacements
function duplicateTemplate(
  sourceTemplatePath: string,
  modelName: string,
  targetTemplatePath: string,
) {
  const content = readFileSync(sourceTemplatePath, 'utf8');
  const newContent = content.replace(/__MODEL__/g, modelName);
  writeFileSync(targetTemplatePath, newContent);
}

// Duplicate a folder recursively
function duplicateFolder(
  sourceDir: string,
  targetDir: string,
  modelName: string,
) {
  if (!existsSync(targetDir)) mkdirSync(targetDir);

  const templates = readdirSync(sourceDir);
  templates.forEach((template) => {
    const sourceTemplatePath = join(sourceDir, template);
    const targetTemplatePath = join(
      targetDir,
      template.replace('template', modelName),
    );

    if (statSync(sourceTemplatePath).isDirectory()) {
      duplicateFolder(sourceTemplatePath, targetTemplatePath, modelName);
    } else {
      duplicateTemplate(sourceTemplatePath, modelName, targetTemplatePath);
    }
  });
}

// Rename files in the target directory that contain "template" in their name
function renameFilesInFolder(targetDir: string, modelName: string) {
  const files = readdirSync(targetDir);
  files.forEach((file) => {
    const oldPath = join(targetDir, file);
    const newPath = join(
      targetDir,
      file.replace('template', modelName).toLocaleLowerCase(),
    );
    if (oldPath !== newPath) {
      renameSync(oldPath, newPath);
    }
  });
}

// Replace "Template" and "template" in file content with model name
function replaceContentInFiles(targetDir: string, modelName: string) {
  const files = readdirSync(targetDir);
  files.forEach((file) => {
    const filePath = join(targetDir, file);
    let content = readFileSync(filePath, 'utf8');

    // Replace "Template" in file content with model name
    content = content.replace(/Template/g, modelName);

    // Replace "template" in file content with model name (lowercase)
    content = content.replace(/template/g, modelName.toLowerCase());

    // Remove "@ts-nocheck" from file content
    content = content.replace(/@ts-nocheck/g, '');

    // Write the updated content back to the file
    writeFileSync(filePath, content);
  });
}

// Generate TypeScript content with array of model names and import paths
function generateModelNamesTemplate(
  models: string[],
  outputBaseFolder: string,
) {
  const content = `
    export const generatedModels: string[] = ${JSON.stringify(models, null, 2)};
    export const generatedImports: string[] = ${JSON.stringify(
      models.map((model) => `./services/${model}/${model}.module`),
      null,
      2,
    )};
  `;
  const outputPath = join(outputBaseFolder, 'generated-models.ts');
  writeFileSync(outputPath, content);
  console.log(`Generated generated-models.ts template at ${outputPath}`);
}

// Main execution
function main() {
  const [schemaPath, sourceFolder, outputBaseFolder] = process.argv.slice(2);

  if (!schemaPath || !sourceFolder || !outputBaseFolder) {
    console.error(
      'Usage: ts-node script.ts <schemaPath> <sourceFolder> <outputBaseFolder>',
    );
    return;
  }

  if (!existsSync(outputBaseFolder))
    mkdirSync(outputBaseFolder, { recursive: true });

  const models = extractModelsFromSchema(schemaPath);
  console.log(`Models found in Prisma schema:`, models);

  models.forEach((modelName) => {
    const targetFolder = join(outputBaseFolder, modelName);
    duplicateFolder(sourceFolder, targetFolder, modelName);
    renameFilesInFolder(targetFolder, modelName);
    replaceContentInFiles(targetFolder, modelName);
  });

  generateModelNamesTemplate(models, outputBaseFolder);
  console.log(`Models Duplication completed.`);
}

main();
