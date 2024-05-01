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

export const router = express.Router();

router.get("/init", async (req, res) => {
  const state = await stateServices.create({ name: "Jawa Timur", id: "35" });
  const city = await cityServices.create({
    name: "Kota Kediri",
    stateId: state.id,
    id: "3501",
  });

  const user = await userServices.create({
    email: "student1@email.com",
    password: "123456",
    name: "Student 1",
  });

  const roleIntern = await roleInternServices.create({
    title: "Software Developer",
    companyId: "1",
  });

  const company = await companyServices.create({
    name: "Company 1",
    description: "Company 1 Description",
    requirements: "Requirements",
    benefits: "Benefits",
    paid: true,
    latitude: "123",
    longitude: "123",
    cityId: city.id,
    typeIntern: "REGULAR",
    typeActivity: "ONSITE",
  });

  const companyImage = await companyImageServices.create({
    companyId: company.id,
    url: "https://via.placeholder.com/150",
  });

  const postActivity = await postActivityServices.create({
    companyId: company.id,
    userId: user.id,
    url: "https://via.placeholder.com/150",
    caption: "Caption",
  });

  const review = await reviewServices.create({
    companyId: company.id,
    userId: user.id,
    rating: 5,
    comment: "Comment",
  });

  const finalReport = await finalReportServices.create({
    companyId: company.id,
    userId: user.id,
    url: "https://via.placeholder.com/150",
  });

  res.json({
    state,
    city,
    location,
    user,
    roleIntern,
    company,
    companyImage,
    postActivity,
    review,
    finalReport,
  });
});