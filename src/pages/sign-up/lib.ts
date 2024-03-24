import axios from 'axios'
import { SubmitHandler } from 'react-hook-form'
import { z } from 'zod'
import { FormFields } from '../../shared/types/types'

export const schema = z.object({
  login: z
    .string()
    .min(4, { message: 'Login must be 4 or more characters long' }),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: 'Password must be 8 or more characters long' }),
})

export const onSubmit: SubmitHandler<FormFields> = async (data) => {
  await axios
    .post('http://176.57.218.48/api/reg:4444', data)
    .then((res) => console.log(res))
}
