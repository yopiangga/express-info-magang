import express from "express";
import * as cityServices from "../services/CityServices";
import * as companyImageServices from "../services/CompanyImageServices";
import * as companyServices from "../services/CompanyServices";
import * as finalReportServices from "../services/FinalReportServices";
import * as locationServices from "../services/LocationServices";
import * as postActivityServices from "../services/PostActivityServices";
import * as reviewServices from "../services/ReviewServices";
import * as roleInternServices from "../services/RoleInternServices";
import * as stateServices from "../services/StateServices";
import * as userServices from "../services/UserServices";

export const router = express.Router();

router.get("/init", async (req, res) => {
  const state = await stateServices.create({ name: "Jawa Timur" });
  const city = await cityServices.create({
    name: "Kota Kediri",
    stateId: state.id,
  });
  const location = await locationServices.create({
    latitude: -7.2740428,
    longitude: 112.7986227,
    cityId: city.id,
  });

  const user = await userServices.create({
    email: "student1@email.com",
    password: "123456",
    name: "Student 1",
  });

  const roleIntern = await roleInternServices.create({
    title: "Software Developer",
  });

  const company = await companyServices.create({
    name: "Company 1",
    description: "Company 1 Description",
    locationId: location.id,
    requirements: "Requirements",
    benefits: "Benefits",
    paid: true,
    roleInternId: roleIntern.id,
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
