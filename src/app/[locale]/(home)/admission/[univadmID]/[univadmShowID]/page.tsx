import AccordionComponent from "@/components/AccordionComponent";
import { getAdminShow } from "@/utlis/https";

interface Universitydmission {
  params: {
    univadmShowID: number;
    locale: string;
  };
}

const AdmissionShow = async ({ params }: Universitydmission) => {
    const { locale, univadmShowID } = params;
    const AdmissionData = await getAdminShow(locale, univadmShowID);
    return (
        <div>
            <AccordionComponent AccordionComponentData={AdmissionData.data} />
        </div>
    );
};


export default AdmissionShow;
