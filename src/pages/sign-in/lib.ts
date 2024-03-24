import axios from 'axios'
import { SubmitHandler } from 'react-hook-form'
import { z } from 'zod'
import { FormFields } from '../../shared/types/types'

export const schema = z.object({
  login: z
    .string()
    .min(4, { message: 'Login must be 4 or more characters long' }),
  password: z
    .string()
    .min(8, { message: 'Password must be 8 or more characters long' }),
})

// export type FormFields = z.infer<typeof schema>

export const onSubmit: SubmitHandler<FormFields> = async (data) => {
  await axios
    .post('http://176.57.218.48/api/auth:4444', data)
    .then((res) => console.log(res))
}
