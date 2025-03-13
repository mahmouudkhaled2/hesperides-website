import AccordionComponent from "@/components/AccordionComponent";
import { getAdmission } from "@/utlis/https";

interface Universitydmission {
  params: {
    univadmID: string;
    locale: string;
  };
}


const UniversityAdmission = async ({ params }: Universitydmission) => {
  const { locale ,univadmID } = params;
  
  const AdmissionData = await getAdmission(locale,univadmID);

  return (
    <>
    
      <AccordionComponent AccordionComponentData={AdmissionData.data} />
    </>
  );
};

export default UniversityAdmission;
