import axios from 'axios'
import { SubmitHandler } from 'react-hook-form'
import { z } from 'zod'
import { FormFields } from '../../shared/types/types'

export const schema = z.object({
  login: z.string().min(4),
  password: z.string().min(8),
})

// export type FormFields = z.infer<typeof schema>

export const onSubmit: SubmitHandler<FormFields> = async (data) => {
  await axios
    .post('http://176.57.218.48/api/auth', data)
    .then((res) => console.log(res))
}
