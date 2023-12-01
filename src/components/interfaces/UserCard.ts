import { InfoApi } from "../../hooks/interfaces/useFetch.interfaces";

export interface UserCardProps {
    user: InfoApi;
    deleteUser: (path: string, id: number) => void;
    setInfoUpdate: React.Dispatch<React.SetStateAction<InfoApi | null>>;
    setIsOpenForm: React.Dispatch<React.SetStateAction<string>>;
}