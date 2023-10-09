/* eslint-disable no-unused-vars */
import { BoxContainer, SpacingLayout } from "../layouts";
import SectionProducts from "../components/sections/SectionProducts";
import {
  SectionLanding,
  SectionTopics,
  SectionBenefit,
  SectionInfrastructure,
  SectionConsultation,
} from "../components/sections";

const LandingPage = () => {
  return (
    <div className="landing-page bg-[#F5F5F7]">
      <SpacingLayout className="mb-[300px] mt-[150px]">
        <BoxContainer>
          <SectionLanding />
        </BoxContainer>
      </SpacingLayout>
      <SpacingLayout className="">
        <BoxContainer>
          <SectionBenefit />
        </BoxContainer>
      </SpacingLayout>
      <SpacingLayout className="mt-[100px]">
        <BoxContainer>
          <SectionProducts />
        </BoxContainer>
      </SpacingLayout>
      <SpacingLayout className="mt-[100px]">
        <BoxContainer>
          <SectionInfrastructure />
        </BoxContainer>
      </SpacingLayout>
      <SpacingLayout className="my-[300px]">
        <BoxContainer>
          <SectionConsultation />
        </BoxContainer>
      </SpacingLayout>
      <SpacingLayout className="my-[300px]">
        <BoxContainer>
          <SectionTopics />
        </BoxContainer>
      </SpacingLayout>
    </div>
  );
};

export default LandingPage;
