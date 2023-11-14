import Input from "../componnent/Input";
import Select from "../componnent/Select";
import { UseFrom } from "../context/fromContext";
import styles from "../styles/Three.module.css";


export default function Three() {


    const { prCountry,
        setprCountry,
        prDivision,
        setprDivision,
        prDistrict,
        setprDistrict,
        prUpazila,
        setprUpazila,
        prUnion,
        setprUnion,
        prPost,
        setprPost,
        prVillage,
        setprVillage,
        psCountry,
        setpsCountry,
        psDivision,
        setpsDivision,
        psDistrict,
        setpsDistrict,
        psUpazila,
        setpsUpazila,
        psUnion,
        setpsUnion,
        psPost,
        setpsPost,
        psVillage,
        setpsVillage } = UseFrom();


    function sameHandler(e) {


        const isChecked = e.target.checked;


        if (isChecked) {
            setprCountry(psCountry);
            setprDivision(psDivision);
            setprDistrict(psDistrict);
            setprUpazila(psUpazila);
            setprUnion(psUnion);
            setprPost(psPost);
            setprVillage(psVillage);

        } else {
            setprCountry('');
            setprDivision('');
            setprDistrict('');
            setprUpazila('');
            setprUnion('');
            setprPost('');
            setprVillage('');
        }
    }



    return (
        <div className={styles.threeWrp}>
            <div className={styles.separed}>
                <h3 className={styles.subhead}>Present Address</h3>
                <div className={styles.parmamentAddress}>

                    <Select setFunction={setpsCountry} label="Country" require="*" length='3' value={["Selete Country", "Bangladesh", "Others"]} selectValue={psCountry} />

                    <Select setFunction={setpsDivision} label="Division" require="*" length='9' value={["Selete Division", "Dhaka", "Chittagong", "Barisal", "Khulna", "Mymensingh", "Rajshahi", "Rangpur", "Sylhet"]} selectValue={psDivision} />

                    <Input setFunction={setpsDistrict} vl={psDistrict} name="District" type="text" require="*" />

                    <Input setFunction={setpsUpazila} vl={psUpazila} name="Upazila" type="text" require="*" />

                    <Input setFunction={setpsUnion} vl={psUnion} name="Union Council" type="text" require="*" />

                    <Input setFunction={setpsPost} vl={psPost} name="Post Office" type="text" require="*" />

                    <Input setFunction={setpsVillage} vl={psVillage} name="Village" type="text" require="*" />


                </div>

            </div>
            <div className={styles.separed}>
                <div className={styles.titleWrper}>
                    <h3 className={styles.subhead}>Parmanennt Address</h3>
                    <input onChange={(e) => sameHandler(e)} type="checkbox" />
                    <span>Present & Parmanennt Address are same</span>
                </div>
                <div className={styles.parmamentAddress}>

                    <Select setFunction={setprCountry} label="Country-c" require="*" length='3' value={["Selete Country", "Bangladesh", "Others"]} selectValue={prCountry} />

                    <Select setFunction={setprDivision} label="Division-c" require="*" length='9' value={["Selete Division", "Dhaka", "Chittagong", "Barisal", "Khulna", "Mymensingh", "Rajshahi", "Rangpur", "Sylhet"]} selectValue={prDivision} />

                    <Input setFunction={setprDistrict} vl={prDistrict} name="District-c" type="text" require="*" />

                    <Input setFunction={setprUpazila} vl={prUpazila} name="Upazila-c" type="text" require="*" />

                    <Input setFunction={setprUnion} vl={prUnion} name="Union Council-c" type="text" require="*" />

                    <Input setFunction={setprPost} vl={prPost} name="Post Office-c" type="text" require="*" />

                    <Input setFunction={setprVillage} vl={prVillage} name="Village-c" type="text" require="*" />

                </div>
            </div>
        </div>
    )
}
