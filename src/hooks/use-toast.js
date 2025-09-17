import { toast as radixUseToast } from "react-hot-toast";

export function useToast() {
  const { toast } = radixUseToast();
  return { toast };
}
