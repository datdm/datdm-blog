# Config NestJs

<a name="readme-top"></a>
NestJs là một NodeJs framework dùng phát triển ứng dụng server-side hiệu quả và có thể mở rộng.

## 1. Cấu trúc NestJs

### Installation

- Installation global nestjs cli:
  ```sh
  npm i -g @nestjs/cli
  ```
- Create new project:
  ```sh
  nest new start_nestjs
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Cấu trúc

- Các file chính
  | File | |
  | ---------------------: | :----------------------------------------------------------------------------------------- |
  | **main.ts** | Khởi tạo các đối tượng chạy ứng dụng, như là NestFactory.create() để tạo instance cho Nest |
  | **app.module.ts** | Là root module của ứng dụng. Đóng gói mọi thứ trong project |
  | **app.controller.ts** | Chứa các router xử lý request và response |
  | **app.services.ts** | Chứa các hàm xử lý logic cho service, như là kết nối DB |
  | **app.controller.spec.ts** | Chứa các hàm xử lý logic cho service, như là kết nối DB |

<p align="right">(<a href="#readme-top">back to top</a>)</p>

- `main.ts` sẽ sử dụng static method `create()` của `NestFactory` để tạo server app.
  ```javascript
  import { NestFactory } from "@nestjs/core";
  import { AppModule } from "./app.module";
  async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(3000);
  }
  bootstrap();
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Controller

- `app.controller.ts` **Controller:** cơ chế routing chuyển các request đến controller và response về tương ứng.

  ```javascript
  import { Controller, Get } from "@nestjs/common";
  import { UsersService } from './users.service';

  export class CreateUserDto {
    name: string;
    age: number;
    address: string;
    job: string;
  }

  @Controller("users") // endpoint router
  export class UsersController {
    // Dependency Injection
    constructor(private usersService: UsersService) {}

    @Get() // method: @Get(), @Post(), @Delete(), @Put(), @Path()
    @HttpCode(204) // config status code
    @Header("Cache-Control", "none") // config header
    findAll(): string {
      return this.usersService.findAll();
    }

    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
      this.usersService.create(createUserDto);
    }
  }
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Provider

- `app.service.ts` **Provider:** thành phần cơ bản của Nest. Một provider đưa vào 1 dependency để tạo ra mối liên kết. Các services, repositories, helpers được thêm @Injectable() để thành provider.

  ```javascript
  import { Injectable } from '@nestjs/common';
  import { User } from './interfaces/user.interface';

  export interface User {
    name: string;
    age: number;
    job: string;
  }

  @Injectable()
  export class UsersService {
    private readonly users: User[] = [];

    create(user: User) {
      this.users.push(cat);
    }

    findAll(): User[] {
      return this.users;
    }
  }
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Module

- `app.module.ts` **Module**: Đóng gói các chức năng logic cần triển khai đến client độc lập. Một module được định nghĩa với @Module, mô tả các thuộc tính như controller, provider, dependency.

  `user.module.ts`

  ```javascript
  import { Module } from "@nestjs/common";
  import { UsersController } from "./users.controller";
  import { UsersService } from "./users.service";

  @Module({
    controllers: [UsersController],
    providers: [UsersService],
  })
  export class UsersModule {}
  ```

  Import module tổng `app.module.ts`

  ```javascript
  import { Module } from "@nestjs/common";
  import { UsersModule } from "./users/users.module";

  @Module({
    imports: [UsersModule],
  })
  export class AppModule {}
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>
