import Image from "next/image";
import Link from "next/link";
import PatientForm from "@/components/forms/PatientForm";
export default function Home() {

  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="flex h-screen max-h-screen">
        {/* TODO : OTP verification */}
        <section className="remove-scrollbar container my-auto">
          <div className="sub-container max-w-[496px]">
            <Image src="/assets/icons/logo-full.svg" alt="Logo" height={1000} width={1000} className="mb-12 h-10 w-fit" />
            <PatientForm />
            <div className="text-14-regular mt-20 flex justify-between ">
              <p className="justify-items-end text-dark-300 xl:text-left ">
                &copy; {currentYear} Carepulse
              </p>
              <Link href="/?admin=true" className="text-green-500">
                Admin
              </Link>
            </div>
          </div>
        </section>
        <Image src="/assets/images/onboarding-img.png" alt="Home Page Image" width={1000} height={1000} className="side-img max-w-[50%]" />
      </div>
    </>
  )
}
