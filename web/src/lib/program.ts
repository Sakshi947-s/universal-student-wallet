import { Connection, PublicKey } from "@solana/web3.js";
import { Program, AnchorProvider, Idl } from "@project-serum/anchor";
import { STUDENT_TAG, PROGRAM_ID } from "./constants";

// Mock IDL since we can't build it yet
const IDL: Idl = {
    version: "0.1.0",
    name: "student_wallet",
    instructions: [
        {
            name: "registerStudent",
            accounts: [
                { name: "studentProfile", isMut: true, isSigner: false },
                { name: "authority", isMut: true, isSigner: true },
                { name: "systemProgram", isMut: false, isSigner: false },
            ],
            args: [
                { name: "name", type: "string" },
                { name: "college", type: "string" },
                { name: "course", type: "string" },
                { name: "year", type: "u8" },
            ],
        },
    ],
    accounts: [
        {
            name: "StudentProfile",
            type: {
                kind: "struct",
                fields: [
                    { name: "authority", type: "publicKey" },
                    { name: "name", type: "string" },
                    { name: "college", type: "string" },
                    { name: "course", type: "string" },
                    { name: "year", type: "u8" },
                    { name: "isVerified", type: "bool" },
                    { name: "bump", type: "u8" },
                ],
            },
        },
    ],
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getProgram = (connection: Connection, wallet: any) => {
    const provider = new AnchorProvider(connection, wallet, {
        preflightCommitment: "processed",
    });
    return new Program(IDL, PROGRAM_ID, provider);
};

export const getStudentProfileAddress = (authority: PublicKey) => {
    return PublicKey.findProgramAddressSync(
        [Buffer.from(STUDENT_TAG), authority.toBuffer()],
        PROGRAM_ID
    )[0];
};
