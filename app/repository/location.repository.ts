import { Result } from "~/domain/result";
import { CreateLocatioDTO } from "./../dtos/createLocationDto";
import { Location, Prisma, PrismaClient } from "@prisma/client";

export class LocationRepository extends PrismaClient {
  constructor() {
    super();
  }

  createLocation = ({ name, longitude, latitude }: CreateLocatioDTO) => {
    return Prisma.validator<Prisma.LocationCreateInput>()({
      name,
      longitude,
      latitude,
    });
  };

  create = async ({
    name,
    longitude,
    latitude,
  }: CreateLocatioDTO): Promise<Location> => {
    try {
      const location = await this.location.create({
        data: this.createLocation({ name, longitude, latitude }),
      });
      return Result.ok(location).getValue();
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === "P2002") {
          console.log(
            "There is a unique constraint violation, a new user cannot be created with this email"
          );
        }
      }
      throw error;
    }
  };
}
