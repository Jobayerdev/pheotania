import { IBaseFilter } from "@shared/interfaces";

import { CoreAxiosInstance } from "./../config/axios/core-axios-instantance";
import { concatFilterQuery } from "@shared/utils";
import {
  IFCreatePetBreeds,
  IFUpdatePetBreeds,
} from "@shared/interfaces/petBreeds.interface";

const END_POINT: string = "/petBreeds/";

export const PetBreedsService = {
  create(payload: IFCreatePetBreeds) {
    console.log(payload);
    return CoreAxiosInstance.post(END_POINT, payload);
  },
  filter(options: IBaseFilter) {
    return CoreAxiosInstance.get(`${END_POINT}?${concatFilterQuery(options)}`);
  },
  filterSingle(payload: string) {
    return CoreAxiosInstance.get(`${END_POINT}${payload}`);
  },
  update(payload: IFUpdatePetBreeds) {
    const { id, name } = payload;
    return CoreAxiosInstance.put(`${END_POINT}${id}`, {
      name,
    });
  },
  delete(id: string) {
    return CoreAxiosInstance.delete(`${END_POINT}${id}`);
  },
};
