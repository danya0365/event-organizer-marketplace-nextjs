import { User } from "@/src/stores/authStore";

export interface MockUser extends User {
  password: string;
}

export const mockUsers: MockUser[] = [
  {
    id: "user-001",
    email: "customer@eventhub.com",
    password: "password123",
    name: "สมชาย ใจดี",
    role: "customer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=customer1",
    phone: "0812345678",
    createdAt: "2024-01-15T10:00:00Z",
    emailVerified: true,
  },
  {
    id: "user-002",
    email: "somying@gmail.com",
    password: "password123",
    name: "สมหญิง รักงาน",
    role: "customer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=customer2",
    phone: "0823456789",
    createdAt: "2024-01-20T14:30:00Z",
    emailVerified: true,
  },
  {
    id: "user-003",
    email: "vendor1@eventhub.com",
    password: "password123",
    name: "บริษัท เต๊นท์สวย จำกัด",
    role: "vendor",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=vendor1",
    phone: "0834567890",
    createdAt: "2024-01-10T09:00:00Z",
    emailVerified: true,
  },
  {
    id: "user-004",
    email: "vendor2@eventhub.com",
    password: "password123",
    name: "ร้านอาหารเลิศรส",
    role: "vendor",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=vendor2",
    phone: "0845678901",
    createdAt: "2024-01-12T11:00:00Z",
    emailVerified: true,
  },
  {
    id: "user-005",
    email: "vendor3@eventhub.com",
    password: "password123",
    name: "สตูดิโอถ่ายภาพมืออาชีพ",
    role: "vendor",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=vendor3",
    phone: "0856789012",
    createdAt: "2024-01-14T13:00:00Z",
    emailVerified: true,
  },
  {
    id: "user-006",
    email: "admin@eventhub.com",
    password: "admin123",
    name: "ผู้ดูแลระบบ EventHub",
    role: "admin",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=admin",
    phone: "0867890123",
    createdAt: "2024-01-01T08:00:00Z",
    emailVerified: true,
  },
  {
    id: "user-007",
    email: "test@test.com",
    password: "test123",
    name: "ผู้ใช้ทดสอบ",
    role: "customer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=test",
    phone: "0878901234",
    createdAt: "2024-02-01T10:00:00Z",
    emailVerified: false,
  },
];

// Helper functions
export const findUserByEmail = (email: string): MockUser | undefined => {
  return mockUsers.find((user) => user.email === email);
};

export const findUserById = (id: string): MockUser | undefined => {
  return mockUsers.find((user) => user.id === id);
};

export const authenticateUser = (
  email: string,
  password: string
): User | null => {
  const user = mockUsers.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) return null;

  // Return user without password
  const { password: _, ...userWithoutPassword } = user;
  return userWithoutPassword;
};

export const isEmailTaken = (email: string): boolean => {
  return mockUsers.some((user) => user.email === email);
};
