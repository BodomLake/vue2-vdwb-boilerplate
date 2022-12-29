// 切片大小
export const SIZE = 10 * 1024 * 1024;
//转换文件类型（解析为BUFFER数据）
export function fileParse(file) {
  return new Promise(resolve => {
    const fileRead = new FileReader();
    fileRead.readAsArrayBuffer(file);
    fileRead.onload = (evt) => resolve(evt.target.result);
  });
}
// 获取后缀名
export function suffixName(name) {
  return /\.([0-9a-zA-Z]+)$/i.exec(name)[1];
}
// 文件分割
export function chunkList(hash, file) {
  const partList = [];
  const count = Math.ceil(file.size / SIZE);
  const partSize = file.size / count;
  const suffix = suffixName(file.name);
  let i = 0, cur = 0;
  while (i < count) {
    const item = { chunk: file.slice(cur, cur + partSize), filename: `${hash}_${i}.${suffix}` };
    cur += partSize;
    partList.push(item);
    i++;
  }
  return partList;
}
/**
 * 
 * @param {*} item 逐个chunk
 * @param {*} callbeck 接收一个函数
 * @returns 外部传入的函数方法
 */
export function formData(item, callbeck) {
  const formData = new FormData();
  formData.append("chunk", item.chunk);
  formData.append("filename", item.filename);
  return callbeck.bind(null, formData);
}

