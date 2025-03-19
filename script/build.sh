#!/bin/zsh


rm ./src/**/*.js
rm ./src/**/*.d.ts

pnpm tailwindcss -o ./asset/style/tailwind.css;
tsc -p tsconfig.export.json;
tsc-alias -p tsconfig.export.json;
pnpm git add .;
rm ./**/tsconfig.export.tsbuildinfo