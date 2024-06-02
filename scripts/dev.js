// 这个文件会帮我们打包packages 下的模块 最终打包出js文件
import minimist from "minimist";
import {resolve,dirname} from "path";
import {fileURLToPath} from "url";
import {createRequire} from "module";

// node 中esm模块没有__dirname 这个变量 , 可以通过这个方法获取当前文件的绝对路径
const _filename = fileURLToPath(import.meta.url);
const __dirname = dirname(_filename);
const require = createRequire(import.meta.url);


// 获取命令行的参数
const argv = minimist(process.argv.slice(2));
const target = argv._[0] || 'reactivity';
// 默认打包个事  模块化规范
const format = argv.f || 'iife';      

const ent = resolve(__dirname, 'packages', target);
const entry = resolve(__dirname,`../packages/${target}/src/index.ts`)
console.log(entry,ent);