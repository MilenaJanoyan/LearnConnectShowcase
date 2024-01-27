import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai';
import {Link, useLocation, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../../utils/constantUrls.ts";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {login, registration} from "../../API/services/userService.ts";
import {toast} from "react-toastify";
import './index.css';

interface IFormData {
    email: string;
    password: string;
}

const Authentication = () => {

    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const navigate = useNavigate();
    const { control, handleSubmit, formState: { errors } } = useForm<IFormData>();

    const onSubmit: SubmitHandler<IFormData> = async (data) => {
        try {
            if (isLogin) {
                const response = await login(data)
                if (!response) {
                    toast('Invalid credentials', { type: 'error' })
                }
                if (response) {
                    toast('Welcome', { type: 'success' })
                    navigate('/', { state: Math.random() })
                }
            } else  {
                const response = await registration(data)
                if (response) {
                    navigate('/login')
                }
                return response
            }
        } catch (error) {
            if (error instanceof Error) {
                toast.error(error.message || 'An error occurred');
            } else {
                toast.error('An unknown error occurred');
            }
        }
    };


    return (
        <div className="login-section h-screen bg-white flex flex-col  justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0 relative">
            <div className="flex flex-col justify-between items-center gap-8 w-[350px]">
                <div className="text-4xl font-bold text-white">M J</div>
                <div className="w-full flex flex-col gap-8">
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

                        <Controller
                            name="email"
                            control={control}
                            rules={{
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "Invalid email address",
                                },
                            }}
                            render={({field}) => (
                                <div className="relative">
                                    <AiOutlineMail
                                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white"
                                        size={20}/>
                                    <input
                                        {...field}
                                        type="email"
                                        className={`w-full bg-white opacity-30 py-3 pl-12 rounded-full px-4 border-none text-black ${
                                            errors.password ? "border-red-500" : "border-gray-300"
                                        }`}
                                        placeholder="Email"
                                        value={undefined}
                                    />
                                </div>
                            )}
                        />
                        <div className="text-red-500 text-xs mt-1">
                            {errors.email && (
                                <p>{errors.email.message}</p>
                            )}
                        </div>

                        <Controller
                            name="password"
                            control={control}
                            rules={{required: "Password is required", minLength: 3, maxLength: 15}}
                            render={({field}) => (
                                <div className="relative">
                                    <AiOutlineLock
                                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white"
                                        size={20}/>
                                    <input
                                        {...field}
                                        type="password"
                                        className={`w-full bg-white opacity-30 py-3 pl-12 rounded-full px-4 border-none text-black ${
                                            errors.password ? "border-red-500" : "border-gray-300"
                                        }`}
                                        placeholder="Password"
                                        value={undefined}
                                    />
                                </div>
                            )}
                        />

                        <div className="text-red-500 text-xs">
                            {errors.password && (
                                <p className="">{errors.password.message}</p>
                            )}
                        </div>
                        <div className="w-full">
                            <button
                                className="w-full bg-[#f2f5ea] opacity-80 hover:opacity-100 transition py-3 rounded-full px-3 border-none">
                                {!isLogin ? "Registration" : "GET STARTED"}
                            </button>
                        </div>
                    </form>
                </div>

                <div className="self-start px-4">
                    <Link to={!isLogin ? LOGIN_ROUTE : REGISTRATION_ROUTE} className="text-white uppercase">
                        {isLogin ? 'Create account' : 'Login'}
                    </Link>
                </div>
            </div>
            <div className="text-white absolute bottom-[70px] right-[70px] mb-4 mr-4">© 2024 MJ. All Rights Reserved</div>
        </div>
    );
}

export default Authentication;
