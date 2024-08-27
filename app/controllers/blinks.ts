import * as service from "../services/donation_service";
import {
    ActionGetRequest,
    ActionGetResponse,
    ActionPostRequest,
    ActionPostResponse,
    ACTIONS_CORS_HEADERS,
    createPostResponse
  } from '@solana/actions';

  import { clusterApiUrl, Connection, PublicKey, LAMPORTS_PER_SOL, Transaction, SystemProgram } from '@solana/web3.js'



export async function getBlink(req, res) {
    const id = req.params.id;

    const baseUrl = `${req.protocol}://${req.get('host')}`;


    try {
        const donation = await service.getDonationById(id);

        const payload : ActionGetResponse = {
            icon: "",
            label: "Donation",
            title: donation.title,
            description: donation.description,
            type: "action",
            links: {
                actions: [
                    {
                        label: "Send 1 SOL 🙂",
                        href: `${baseUrl}/api/donation/${id}?amount=1`
                    },
                    {
                        label: "Send 2 SOL 😎",
                        href: `${baseUrl}/api/donation/${id}?amount=2`
                    },
                    {
                        label: "Donate",
                        href: `${baseUrl}/api/donation/${id}?amount={amount}`,
                        parameters: [
                          {
                            name: "amount", 
                            label: "Enter the amount of SOL to donate" 
                          }
                        ]
                    }
                ]
            }
        }

        res.set(ACTIONS_CORS_HEADERS);


        res.status(201).json(payload);

    } catch (error) {
        console.log(error);
        res.set(ACTIONS_CORS_HEADERS);
        return res.json("An unknown error occurred");
    }
}

export async function donate(req, res) {
    const id = req.params.id;
    const amountStr = req.query.amount;
    const amount = amountStr ? parseFloat(amountStr) : 0;

    try {

        const donation = await service.getDonationById(id);

        if(!donation || !donation.address) {
            return res.status(404).json("Donation address not found");
        }

        const body : ActionPostRequest = req.body;

        let account: PublicKey;

        account = new PublicKey(body.account);

        const conn = new Connection(clusterApiUrl("devnet"), "confirmed");    
        
        const minimumBalance = await conn.getMinimumBalanceForRentExemption(0);

        if(amount * LAMPORTS_PER_SOL < minimumBalance) {
            throw `account may not be rent exmpted`;
        }

        const transaction = new Transaction();

        transaction.add(
            SystemProgram.transfer({
                fromPubkey: account,
                toPubkey: new PublicKey(donation.address),
                lamports: amount * LAMPORTS_PER_SOL
            })
        );

        transaction.feePayer = account;

        transaction.recentBlockhash = (await conn.getLatestBlockhash()).blockhash;

        const payload : ActionPostResponse = await createPostResponse({
            fields: {
                transaction,
                message: `Sent ${amount} SOL to ${donation.address}`,
            }
        })

        res.set(ACTIONS_CORS_HEADERS);

        res.status(201).json(payload);
        
    } catch (error) {
        console.log(error);
        res.set(ACTIONS_CORS_HEADERS);
        return res.json("An unknown error occurred");
    }
}