import { toast } from "react-toastify";

const successToast = (message)=>{
    toast.success(`${message}`)
};

const errorToast = (message)=>{
    toast.error(`${message}`);
};

const infoToast = (message)=>{
    toast.info(`${message}`);
}

export {successToast, errorToast, infoToast};