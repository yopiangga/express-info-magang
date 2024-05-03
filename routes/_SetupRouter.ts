import express from "express";
import * as cityServices from "../services/CityServices";
import * as companyImageServices from "../services/CompanyImageServices";
import * as companyServices from "../services/CompanyServices";
import * as finalReportServices from "../services/FinalReportServices";
import * as postActivityServices from "../services/PostActivityServices";
import * as reviewServices from "../services/ReviewServices";
import * as roleInternServices from "../services/RoleInternServices";
import * as stateServices from "../services/StateServices";
import * as userServices from "../services/UserServices";

import dotenv from "dotenv";
import fs from "fs";
import path from "path";

dotenv.config();

export const router = express.Router();

router.get("/region", async (req, res) => {
  const base_path = process.env.PATH_EXPRESS

  const data_provinsi = require(`${base_path}/data/provinsi.json`);

  data_provinsi.forEach(async (provinsi: any) => {
    const state = await stateServices.create({ id: provinsi.id.toString(), name: provinsi.nama });

    const data_city = require(`${base_path}/data/kabupaten/${provinsi.id}.json`);

    data_city.forEach(async (city: any) => {
      const city_data = await cityServices.create({ name: city.nama, stateId: state.id, id: city.id.toString() });
    })
  });

  res.json({ message: "Region Oke" });

});

router.get("/user", async (req, res) => {
  for (let i = 1; i <= 10; i++) {
    const user = await userServices.create({
      email: `student${i}@email.com`,
      password: "123456",
      name: `Student ${i}`
    });
    }
  res.json({ message: "User Oke" });
});

router.get("/company", async (req, res) => {
  const data_company = require(`${process.env.PATH_EXPRESS}/data/company.json`);

  data_company.forEach(async (company: any) => {
      const company_data = await companyServices.create({
        name: company.name,
        description: company.description,
        requirements: company.requirements,
        benefits: company.benefits,
        paid: company.paid,
        latitude: company.latitude,
        longitude: company.longitude,
        cityId: company.cityId,
        typeIntern: company.typeIntern,
        typeActivity: company.typeActivity
      });
    

    const roleIntern = await roleInternServices.create({
      title: "Software Developer",
      companyId: company_data.id,
    });

    const company_image = await companyImageServices.create({
      companyId: company_data.id,
      url: "https://via.placeholder.com/150"
    });

    const postActivity = await postActivityServices.create({
      companyId: company_data.id,
      userId: "clvq1y8u20000rdousxc4bk8n",
      url: "https://via.placeholder.com/150",
      caption: "Caption",
    });
  
    const review = await reviewServices.create({
      companyId: company_data.id,
      userId: "clvq1y8u20000rdousxc4bk8n",
      rating: 5,
      comment: "Comment",
    });
  });

  res.json({ message: "Company Oke" });
});




