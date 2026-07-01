import React, { useState } from "react";
import NavHeader from "../../ui/NavBar";
import { loginUser, ApiError } from "../../../api/api";
import { useAuth } from "../../../context/authContext";
import { useNavigate } from "react-router-dom";

//el import no hace falta como tal pero es para que sea mas legible el codigo por que maneja condicionales, lo mismo con los bg
const ojoTrue =
  "https://res.cloudinary.com/dnxlfdsh5/image/upload/v1781315263/ojoTrue_qro4zj.png";
const ojoFalse =
  "https://res.cloudinary.com/dnxlfdsh5/image/upload/v1781315262/ojoFalse_mdgqlq.png";

interface LoginForm {
  email: string;
  password: string;
}

export default function Login() {
  const { login } = useAuth();

  const navigate = useNavigate();

  const [user, setUser] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setIsSubmitting(true);

    try {
      const response = await loginUser({
        email: user.email,
        password: user.password,
      });

      // Guarda la sesión en el AuthContext (que internamente también
      // persiste en localStorage para sobrevivir recargas de página).
      login(response.user, response.token);

      login(response.user, response.token);
      navigate("/");
    } catch (error) {
      if (error instanceof ApiError) {
        if (error.status === 401) {
          setErrorMessage("Incorrect email or password.");
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

      <div className="flex justify-center bg-(--blue-color) pt-2">
        <section className="min-h-[calc(100vh-80px)] flex w-300">
          {/* LEFT SIDE */}

          <div className="flex-2 bg-(--blue-color)">
            <div className="text-[var(--dark-color)] flex flex-col pr-60 my-10 ">
              <h2 className="text-4xl font-extrabold mb-4 text-[var(--dark-color)]">
                LOG IN
              </h2>

              <p className="text-2xl opacity-90 m-1 text-[var(--dark-color)]  mb-10 font-medium">
                Log in now to comment, rate and enjoy everything{" "}
                <span className="font-bold">WAG!</span> got for you!
              </p>

              <p className="text-2xl opacity-90 mt-1 text-[var(--dark-color)] font-medium">
                We are the pet friendly web that cares about your dog as much as
                you do!
              </p>
            </div>

            <img
              src="https://res.cloudinary.com/dnxlfdsh5/image/upload/v1782584282/PerroLog_vriadp_1_1_l2nwbt.png"
              alt="Dog"
              className="block w-[780px] max-w-none"
            />
          </div>

          {/* RIGHT SIDE */}
          <div className="flex-3 bg-(--blue-color) flex flex-col items-center justify-center">
            <div>
              <div className="mb-8 text-center">
                <h1 className="text-4xl font-extrabold text-[var(--dark-color)]">
                  WAG!
                </h1>

                <p className="text-[var(--dark-color)] mt-2">
                  Sign in to your account
                </p>
              </div>

              <div className="rounded-3xl p-8 bg-(--primary-color) min-w-[500px]">
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-[var(--dark-color)]">
                      Email
                    </label>

                    <input
                      type="email"
                      value={user.email}
                      onChange={(e) =>
                        setUser({
                          ...user,
                          email: e.target.value,
                        })
                      }
                      className="px-4 py-3 border rounded-xl bg-white"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
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
                  </div>

                  <div className="text-right">
                    <button
                      type="button"
                      className="text-(--orange-color) text-sm font-medium hover:underline"
                    >
                      Forgot Password?
                    </button>
                  </div>

                  {errorMessage && (
                    <p className="text-red-600 text-sm text-center">
                      {errorMessage}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-(--blue-color) text-white py-3 rounded-xl font-semibold hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "login in..." : "Log In"}
                  </button>

                  <p className="text-center text-[var(--dark-color)] mt-4">
                    Don't have an account?{" "}
                    <span
                      className="text-(--orange-color) font-semibold cursor-pointer hover:underline"
                      onClick={() => navigate("/signin")}
                    >
                      Create one now!
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
