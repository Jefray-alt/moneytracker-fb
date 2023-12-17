import { Link } from 'react-router-dom';

const Login = () => {
	return (
		<div className='w-screen h-screen flex justify-center items-center flex-col px-2'>
			<div className='w-full max-w-md py-14 rounded-lg shadow-lg'>
				<div className='text-center mb-4'>
					<h1 className='text-4xl font-bold'>Money Tracker</h1>
				</div>
				<div className='max-w-md w-full'>
					<form className='flex flex-col space-y-5 justify-center items-center p-6'>
						<div className='form-control w-full max-w-sm'>
							<input
								placeholder='Email'
								type='text'
								className='input input-bordered w-full'
							/>
						</div>
						<div className='form-control w-full max-w-sm'>
							<input
								placeholder='Password'
								type='password'
								className='input input-bordered w-full'
							/>
						</div>
						<div className='form-control w-full mt-3 max-w-sm'>
							<input
								type='submit'
								value='Login'
								className='btn bg-primary text-white'
							/>
						</div>
						<div className='form-control w-full text-center max-w-sm'>
							<span>
								or{' '}
								<Link
									to={'/register'}
									className='underline text-primary inline ml-1'
								>
									Register
								</Link>
							</span>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
