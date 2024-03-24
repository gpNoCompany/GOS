import axios from 'axios'
import { SubmitHandler } from 'react-hook-form'
import { z } from 'zod'
import { FormFields } from '../../shared/types/types'

export const schema = z.object({
  login: z.string().min(4),
  email: z.string().email(),
  password: z.string().min(8),
})

export const onSubmit: SubmitHandler<FormFields> = async (data) => {
  await axios
    .post('http://176.57.218.48/api/reg:4444', data)
    .then((res) => console.log(res))
}
