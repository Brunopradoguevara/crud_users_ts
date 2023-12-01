import { InfoApi } from "../../hooks/interfaces/useFetch.interfaces";

export interface FormUsersProps {
    createUser: (path: string, data: InfoApi[] | [] | InfoApi) => void;
    infoUpdate: InfoApi | null;
    updateUser: (path: string, id: number, data: InfoApi) => void;
    setInfoUpdate:  React.Dispatch<React.SetStateAction<InfoApi | null>>;
    formTitle: string;
    isOpenForm: string;
    setIsOpenForm:  React.Dispatch<React.SetStateAction<string>>;
}