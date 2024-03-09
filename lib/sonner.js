import { toast } from "sonner";

const callToast = (type, message) => {
  switch(type) {
    case 'default':
      toast(message);
      break;
    case 'description':
      toast.description(message);
      break;
    case 'success':
      toast.success(message);
      break;
    case 'info':
      toast.info(message);
      break;
    case 'warning':
      toast.warning(message);
      break;
    case 'error':
      toast.error(message);
      break;
    case 'action':
      toast.action(message);
  }
}

export { callToast }