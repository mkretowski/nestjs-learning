import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateOrderDTO {
  @IsNotEmpty()
  @IsUUID(4)
  @IsString()
  productId: string;

  @IsNotEmpty()
  @IsUUID(4)
  @IsString()
  clientId: string;
}
