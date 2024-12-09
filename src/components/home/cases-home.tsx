import Image from "next/image";
import { CaseCard } from "./case-card";
import { CaseCardContainer } from "./case-card-container";

export function CasesHome() {
  return (
    <>
      <CaseCardContainer>
        <CaseCard
          caseNumber="01"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      </CaseCardContainer>
      <CaseCardContainer>
        <CaseCard
          caseNumber="02"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      </CaseCardContainer>
      <CaseCardContainer>
        <CaseCard
          caseNumber="03"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      </CaseCardContainer>
      <CaseCardContainer>
        <CaseCard
          caseNumber="04"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      </CaseCardContainer>
      <Image
        src={"/Banner.jpg"}
        width={401}
        height={176}
        alt="banner"
        className="lg:hidden w-auto"
      />
    </>
  );
}
