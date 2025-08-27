import { Card, CardContent, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Footer from "../components/Footer";
import Navbar from "../components/Header";

export default function Contact() {
    return (
        <>
            <Navbar />

            <section>
                <div className="max-w-[1200px] m-auto mt-[120px]">
                    <a className="text-blue-500" href="">Bog`lanish</a><br />
                    <strong className="text-[35px]">Savollaringiz bo`lsa murojaat qiling</strong>
                </div>

                <div className="max-w-[1200px] m-auto justify-between flex gap-4 mt-[20px]">
                    <Card sx={{ minWidth: 350, boxShadow: 3 }}>
                        <CardContent>
                            <PhoneIcon color="primary" fontSize="large" />
                            <Typography variant="h6" fontWeight="bold">Telefon</Typography>
                            <Typography variant="body1">+998(97) 866 50 50</Typography>
                        </CardContent>
                    </Card>

                    <Card sx={{ minWidth: 350, boxShadow: 3 }}>
                        <CardContent>
                            <EmailIcon color="primary" fontSize="large" />
                            <Typography variant="h6" fontWeight="bold">Elektron Pochta</Typography>
                            <Typography variant="body1">itliveguliston2023@gmail.com</Typography>
                        </CardContent>
                    </Card>

                    <Card sx={{ minWidth: 350, boxShadow: 3 }}>
                        <CardContent>
                            <LocationOnIcon color="primary" fontSize="large" />
                            <Typography variant="h6" fontWeight="bold">Manzil</Typography>
                            <Typography variant="body1">
                                Sirdaryo vil, Guliston sh, 1-mavze, <br /> IT LIVE ACADEMY
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <section>
                <div className="max-w-[1200px] m-auto h-[600px] mt-[50px] bg-gradient-to-br from-[#EBF2FE] to-white">
                    <strong className="text-[35px] flex justify-center pt-[50px]">Murojaatlarni shu yerdan jo'nating!</strong>
                    <div className="mt-[50px]">
                        <div className="text-center">
                            <label className="mr-[26%]" htmlFor="">To'liq ismingizni kiriting</label><br />
                            <input className="border rounded-sm border-gray-500 outline-none w-[40%] h-[50px] p-[15px]" type="text" placeholder="F.I.SH" required />
                        </div><br />

                        <div className="text-center">
                            <label className="mr-[35%]" htmlFor="">Telefon</label><br />
                            <input className="border rounded-sm border-gray-500 outline-none w-[40%] h-[50px] p-[15px]" type="number" placeholder="+998" required />
                        </div><br />

                        <div className="text-center">
                            <label className="mr-[36%]" htmlFor="">Xabar</label><br />
                            <input className="border rounded-sm border-gray-500 outline-none w-[40%] h-[100px] p-[15px]" type="text" placeholder="Matn" required />
                        </div><br />
                        <div className="flex justify-center">
                            <button className="bg-blue-500 text-white w-[40%] h-[40px] rounded-sm">Yuborish</button>
                        </div>
                    </div>
                </div>
            </section>



            <Footer />

        </>
    );
}
