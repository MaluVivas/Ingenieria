import React, { useState } from "react";
import NavHeader from "../../ui/NavBar";
import { registerUser, ApiError } from "../../../api/api";
import { useAuth } from "../../../context/authContext";
import { useNavigate } from "react-router-dom";

//el import no hace falta como tal pero es para que sea mas legible el codigo por que maneja condicionales, lo mismo con los bg
const ojoTrue =
  "https://res.cloudinary.com/dnxlfdsh5/image/upload/v1781315263/ojoTrue_qro4zj.png";
const ojoFalse =
  "https://res.cloudinary.com/dnxlfdsh5/image/upload/v1781315262/ojoFalse_mdgqlq.png";

interface UserForm {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

export default function Register() {
  const { login } = useAuth();

  const navigate = useNavigate();

  const [user, setUser] = useState<UserForm>({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (user.password !== user.confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await registerUser({
        name: user.name,
        email: user.email,
        phone: user.phone,
        password: user.password,
      });

      // Guarda la sesión en el AuthContext (persiste en localStorage internamente)
      login(response.user, response.token);

      setSuccessMessage(
        "User registered successfully! Redirecting to login...",
      );

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      if (error instanceof ApiError) {
        if (error.status === 409) {
          setErrorMessage("This email is already registered.");
        } else if (error.body.errors?.length) {
          setErrorMessage(error.body.errors[0].message);
        } else {
          setErrorMessage(error.body.message);
        }
      } else {
        setErrorMessage("Could not connect to the server. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <NavHeader logo="WAG!" variant="auth" />

      <div className="flex justify-center bg-(--orange-color) pt-2">
        <section className="min-h-[calc(100vh-80px)] flex w-300 ">
          {/* LEFT SIDE */}

          <div className="flex-2 bg-(--orange-color)">
            <div className="text-[var(--dark-color)] flex flex-col pr-60 my-10 ">
              <h2 className="text-4xl font-extrabold mb-4 text-[var(--dark-color)]">
                SIGN IN
              </h2>

              <p className="text-2xl opacity-90 m-1 text-[var(--dark-color)]  mb-10 font-medium">
                Sign in now to comment, rate and discover everything{" "}
                <span className="font-bold">WAG!</span> got for you!
              </p>

              <p className="text-2xl opacity-90 mt-1 text-[var(--dark-color)] font-medium">
                We are the pet friendly web that cares about your pet as much as
                you do!
              </p>
            </div>

            <img
              src="https://res.cloudinary.com/dnxlfdsh5/image/upload/v1781315265/gatoSign_ayklkt.png"
              alt="Cat"
              className="block w-[780px] max-w-none mx-auto pr-40"
            />
          </div>

          {/* RIGHT SIDE */}
          <div className="flex-3 bg-(--orange-color) flex flex-col items-center justify-center ">
            <div>
              <div className="mb-8 text-center">
                <h1 className="text-4xl font-extrabold text-[var(--dark-color)] ">
                  WAG!
                </h1>

                <p className="text-[var(--dark-color)]  mt-2">
                  Create your account
                </p>
              </div>

              <div className="rounded-3xl p-8 bg-(--primary-color)">
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-[var(--dark-color)]">
                      Name
                    </label>

                    <input
                      type="text"
                      value={user.name}
                      onChange={(e) =>
                        setUser({ ...user, name: e.target.value })
                      }
                      className="px-4 py-3 border rounded-xl bg-white"
                    />
                  </div>

                  <label className="text-sm font-medium text-[var(--dark-color)]">
                    Email
                  </label>

                  <input
                    type="email"
                    value={user.email}
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                    className="px-4 py-3 border rounded-xl bg-white"
                  />
                  <label className="text-sm font-medium text-[var(--dark-color)]">
                    Phone
                  </label>
                  <input
                    type="text"
                    value={user.phone}
                    onChange={(e) =>
                      setUser({ ...user, phone: e.target.value })
                    }
                    className="px-4 py-3 border rounded-xl bg-white"
                  />
                  <label className="text-sm font-medium text-[var(--dark-color)]">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={user.password}
                      onChange={(e) =>
                        setUser({
                          ...user,
                          password: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 border rounded-xl bg-white"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2"
                    >
                      <img
                        src={showPassword ? ojoTrue : ojoFalse}
                        alt={
                          showPassword
                            ? "Ocultar contraseña"
                            : "Mostrar contraseña"
                        }
                        className="h-6 w-6"
                      />
                    </button>
                  </div>

                  <label className="text-sm font-medium text-[var(--dark-color)]">
                    Confirm Password
                  </label>

                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      value={user.confirmPassword}
                      onChange={(e) =>
                        setUser({
                          ...user,
                          confirmPassword: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 border rounded-xl bg-white"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2"
                    >
                      <img
                        src={showConfirmPassword ? ojoTrue : ojoFalse}
                        alt={
                          showConfirmPassword
                            ? "Ocultar contraseña"
                            : "Mostrar contraseña"
                        }
                        className="h-6 w-6"
                      />
                    </button>
                  </div>

                  {errorMessage && (
                    <p className="text-red-600 text-sm text-center -mb-2">
                      {errorMessage}
                    </p>
                  )}
                  {successMessage && (
                    <p className="text-green-600 text-sm text-center -mb-2">
                      {successMessage}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-(--bright-orange) text-[var(--main-color)] py-3 rounded-4xl font-semibold hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Registering..." : "Register"}
                  </button>

                  <p className="text-center text-[var(--dark-color)] mt-4">
                    Already have an account?{" "}
                    <span
                      className="text-[var(--bright-blue)] font-semibold cursor-pointer hover:underline"
                      onClick={() => navigate("/login")}
                    >
                      Log into it now!
                    </span>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
