import { query } from "./_generated/server";

export const Aspire  = query({
    handler: async (ctx) => {
        return await ctx.db.query("Aspire").collect();
    }
    });


