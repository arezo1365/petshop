export default function paginate(items) {
  //items= [1,2,3,4,5,6,7,8,9,10,11,12,13]
  const itemPerPage = 5;
  const pages = Math.ceil(items.length / itemPerPage);
  // [[],[],[]]
  const paggedItems = Array.from({ length: pages }, (_, i) => {
    const start = i * itemPerPage; // 0*5 => 0 / 1*5=5
    return items.slice(start, start + itemPerPage); //  items.slice(0,5) =>[1,2,3,4,5] / items.slice(5,10) =>[6,7,8,9,10]
  });
  return paggedItems;
}
