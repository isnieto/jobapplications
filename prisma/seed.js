const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

const app_status = [
	{
		id: 1,
        state: "active",        
        active: true,       
        pending: false,      
        rejected: false,     
	},
	{
		id: 2,
        state: "pending",        
        active: false,       
        pending: true,      
        rejected: false,     
	},
	{
		id: 3,
        state: "rejected",        
        active: false,       
        pending: false,      
        rejected: true,     
	},
];

async function main() {

	for (let i = 0; i < app_status.length; i++) {
		const status = app_status[i];
		await prisma.app_status.upsert({
			where: {id: status.id},
			update: {},
			create: {
				...status,
			},
		});
	}
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
