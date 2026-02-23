import { useForm } from "react-hook-form"
import registerFormValidation from "../../validator/forms/registerForm"

// export default function RegistrationForm() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isValid, isSubmitting },
//   } = useForm()

//   const registerUser = data => {
//     console.log("Data submitted: ", data)
//   }

//   return (
//     <form onSubmit={handleSubmit(registerUser)}>
//       <h1>Registration From</h1>
//       <div style={{ display: "flex", flexDirection: "column" }}>
//         <label>
//           First name{" "}
//           <input
//             {...register("firstname", { required: "First name is required" })}
//           />
//         </label>
//         {errors.username && <p>{errors.username.message}</p>}
//         <label>
//           Last name{" "}
//           <input
//             {...register("lastname", { required: "Last name is required" })}
//           />
//         </label>
//         {errors.lastname && <p>{errors.lastname.message}</p>}
//         <label>
//           Login{" "}
//           <input {...register("login", { required: "Login is required" })} />
//         </label>
//         {errors.login && <p>{errors.login.message}</p>}
//       </div>
//       <button type="submit" disabled={!isValid || isSubmitting}>
//         Register
//       </button>
//     </form>
//   )
// }

export default function RegistrationForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const registerUser = data => {
    console.log("Data submitted: ", data)
  }

  const selectRegisterOption = watch("selectRegisterType")

  const { firstName, lastName, password } = registerFormValidation

  return (
    <form onSubmit={handleSubmit(registerUser)}>
      <h1>Registration From</h1>

      <select {...register("selectRegisterType")}>
        <option value="person">Person</option>
        <option value="company">Company</option>
      </select>
      <div>
        <label>
          {" "}
          First name <input type="text" {...register("firstname", firstName)} />
          {errors.firstname && <p>{errors.firstname.message}</p>}
        </label>
      </div>
      <div>
        <label>
          {" "}
          Last name <input type="text" {...register("lastname", lastName)} />
          {errors.lastname && <p>{errors.lastname.message}</p>}
        </label>
      </div>
      <div>
        <label>
          {" "}
          Password <input type="password" {...register("password", password)} />
          {errors.password && <p>{errors.password.message}</p>}
        </label>
      </div>
      {selectRegisterOption === "company" && (
        <label>
          Company name <input type="text" {...register("companyName")} />
        </label>
      )}

      <button type="submit">Submit</button>
    </form>
  )
}
