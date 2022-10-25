# typeorm cli old
"typeorm": "ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js -d src/database/database.ts",

# typeorm cli new
typeorm: typeorm-ts-node-commonjs

# typeorm:create
yarn typeorm:create ./src/database/migrations/{file_name}

# typeorm:generate
yarn typeorm:generate ./src/database/migrations/{file_name}