##################
## Development ##
#################

rebuild:		
		npx prisma migrate dev --name initial; npm run dev; 