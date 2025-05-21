import dayjs from "dayjs"

export const formatarData = (data: string | Date, formato = "DD/MM/YYYY") => {
  return dayjs(data).format(formato)
}
