
export interface UseFetchInterface {
  infoApi: InfoApi[] | undefined;
  getApi: (path: string) => void;
  postApi: (path: string, data: InfoApi[] | [] | InfoApi) => void;
  deleteApi: (path: string, id: number) => void;
  updateApi: (path: string, id: number, data: InfoApi) => void;
}

export interface InfoApi  {
  birthday: string,
  email: string,
  first_name: string,
  id: number,
  image_url: string | null,
  last_name: string,
  password:string
}