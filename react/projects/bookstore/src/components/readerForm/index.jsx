import { useForm } from "react-hook-form"
import { readerAddAction } from "../../redux/actions"
import { connect } from "react-redux"
import Form from "../form"

function ReaderForm({ dispatch }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = data => {
    dispatch(readerAddAction(data.name, data.email))

    reset()
  }

  const fields = [
    {
      name: "name",
      type: "text",
      placeholder: "Reader name",
      rules: { required: "Name is required" },
    },
    {
      name: "email",
      type: "email",
      placeholder: "Email",
      rules: {
        required: "Email is required",
        pattern: {
          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          message: "Email is invalid",
        },
      },
    },
  ]

  return (
    <Form
      fields={fields}
      register={register}
      errors={errors}
      onSubmit={handleSubmit(onSubmit)}
      submitLabel="Add Reader"
    />
  )
}
export default connect()(ReaderForm)
