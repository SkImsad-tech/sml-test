interface IAddReq {
  fio: string;
  score: string;
  birthday: string;
}

interface IListRes {
  id: string,
  fio: string;
  score: string;
  birthday: string;
}

interface IUpdateReq {
  fio?: string;
  score?: string;
  birthday?: string;
}


export {
  IUpdateReq,
  IAddReq,
  IListRes
}