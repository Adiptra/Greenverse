import CardConsul from '../../components/parts/CardConsul';
import { Button } from 'flowbite-react';
import { question, conselor } from '../../assets/img';

import { SpacingLayout, BoxContainer } from '../../layouts';

const Consultation = () => {
	return (
		<div>
			<div className='wrapper'>
				<SpacingLayout>
					<BoxContainer>
						<div className='mt-32'>
							<div className='container-consul'>
								<div className='title text-center'>
									<h1 className='font-HaasMd text-3xl'>
										Choose Your Consultation Metode
									</h1>
									<p className='text-[#5F5F5F]'>
										We provide 2 type of consultation
									</p>
								</div>

								<div className='selection flex flex-wrap flex-col lg:flex-row items-center justify-center sm:mt-0 lg:mt-20 mb-20'>
									<CardConsul
										path={question}
										sub_title={'Questionnaire'}
										desc={'You just answer the questions we ask.'}
									/>
									<div className='mx-4'></div>
									<CardConsul
										path={conselor}
										sub_title={'Conselor'}
										desc={'You can look for a suitable counselor to consult.'}
									/>
								</div>

								<div className='btn w-full flex mt-52 justify-center'>
									<Button
										className={`bg-[#313A36] text-lg px-[32px] text-white hover:bg-[#0f231a] mt-7 rounded-[24px]`}>
										Back to Home
									</Button>
								</div>
							</div>
						</div>
					</BoxContainer>
				</SpacingLayout>
			</div>
		</div>
	);
};

export default Consultation;
