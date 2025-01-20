// const GenerateLinkMutation = graphql(`
//   mutation GenerateLink {
//     basket {
//       generateCheckoutLink
//     }
//   }
// `);

// const generateLinkAndRedirect = async (): Promise<string> => {
//   const result = await executeGql(
//     GenerateLinkMutation,
//     {},
//     await getIronSessionData()
//   );

//   return result.data.basket.generateCheckoutLink;
// };

// async function getIronSessionData(): Promise<SessionData> {
//   const session = await getIronSession<SessionData>(await cookies(), {
//     password: process.env.IRON_PASSWORD as string,
//     cookieName: process.env.IRON_NAME as string,
//   });
//   return session ?? defaultSession;
// }

export async function POST() {
  // const link = await generateLinkAndRedirect();

  return Response.json({
    redirectUri: "",
  });
}
