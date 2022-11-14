import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const DescriptionID = () => {
    return (
        <div>
            <Container className="about-description-container py-3 px-5">
                <Row>
                    <Col lg={true}>
                        <h1 className="font-1 pb-5">TENTANG PERUSAHAAN KAMI</h1>
                        <h2 className="font-2-black pb-3">PT. RESTU INTI NUSA ABADI</h2>

                        <div className="font-4 pb-3">
                            PT. Restu Inti Nusa Abadi adalah perusahaan investasi yang menyediakan berbagai layanan dengan membantu klien untuk melaksanakan aksi korporasi dalam menetapkan tujuan dan struktur strategis melalui penawaran umum, merger & akuisisi dan restrukturisasi.
                        </div>
                        <div className="font-4 pb-3">
                            PT. Restu Inti Nusa Abadi (Restu Investama) berusaha untuk berkontribusi aktif di pasar modal Indonesia dengan menyediakan berbagai solusi keuangan terpadu untuk aksi korporasi di sektor keuangan dan investasi.
                        </div>
                        <div className="font-4 pb-3">
                            Restu Investama dilengkapi dengan berbagai pengalaman dan keahlian di bidang advisory termasuk penilaian saham, peraturan perundang-undangan mengenai perseroan terbatas, pasar modal dan perpajakan.
                        </div>
                        <div className="font-4 pb-3">
                            Berdiri pada tahun 2021 dengan izin dari Kementerian Hukum dan Hak Asasi Manusia AHU- 0079557.AH.01.01.Pada tahun 2021, Restu Investama merupakan salah satu pemimpin dari sekian banyak perusahaan manajer investasi di Indonesia. Sejak saat itu, Restu Investama terus menjalankan bisnisnya melewati pasang surut industri reksa dana di Indonesia hingga saat ini.
                        </div>
                        <div className="font-4 pb-3">
                            Saat ini, Restu Investama telah mengelola beberapa portofolio berbagai produk reksa dana dan kontrak pengelolaan dana bilateral. Kami menyediakan layanan ini kepada nasabah perorangan melalui berbagai mitra agen penjual perbankan di Indonesia, baik bank nasional maupun asing. Sementara itu, nasabah institusi kami meliputi dana pensiun, yayasan, perusahaan asuransi dan korporasi.
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default DescriptionID;