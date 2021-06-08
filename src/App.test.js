import { getPublicGists, getGistForUser } from "./services/gistService";

import { dateDisplay } from "./utils/dateDisplay";

jest.mock("./services/gistService", () => ({
  getPublicGists: jest.fn(() => {
    return {
      data: [
        { description: "Test 1", owner: { id: 12525, login: "paul-cozma" } },
        { description: "Test 2", owner: { id: 12955, login: "niineja" } },
        { description: "Test 3", owner: { id: 15855, login: "codeze" } },
      ],
      status: 200,
      url: "somedummyURL",
    };
  }),
  getGistForUser: jest.fn((username) => {
    return {
      data: [{ description: "Test 2", owner: { id: 12955, login: "niineja" } }],
      status: 200,
      url: "somedummyURL",
    };
  }),
}));

describe("gistService", () => {
  // Testing status code for public gist
  test("Status Code of public gist to be 200", async () => {
    const result = await getPublicGists();
    expect(result.status).toBe(200);
  });

  // Testing status code for user gist
  test("Status Code of uset gist to be 200", async () => {
    const result = await getGistForUser("test");
    expect(result.status).toBe(200);
  });

  // Testing shape of data returned from public gist
  test("Data returned from public gist", async () => {
    const result = await getPublicGists();
    expect(result.data).toBeInstanceOf(Array);
  });

  // Testing data returned user gist
  test("Login returned from specific user gist", async () => {
    const result = await getGistForUser("test");
    expect(result.data[0].owner.login).toBe("niineja");
  });
});

describe("Test Date Convertion", () => {
  test("Convert date", () => {
    const result = dateDisplay("2021-06-08T10:58:41Z");
    expect(result).toBe("6/8/2021");
  });
});
