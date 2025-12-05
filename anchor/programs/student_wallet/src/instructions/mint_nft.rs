use anchor_lang::prelude::*;
use anchor_spl::token::{self, Mint, Token, TokenAccount, MintTo};
use anchor_spl::metadata::{
    create_metadata_accounts_v3,
    CreateMetadataAccountsV3,
    Metadata,
};
use mpl_token_metadata::types::DataV2;
use crate::state::StudentProfile;
use crate::constants::STUDENT_TAG;

#[derive(Accounts)]
pub struct MintStudentNFT<'info> {
    #[account(mut)]
    pub authority: Signer<'info>,

    #[account(
        mut,
        seeds = [STUDENT_TAG, authority.key().as_ref()],
        bump = student_profile.bump,
    )]
    pub student_profile: Account<'info, StudentProfile>,

    #[account(
        init,
        payer = authority,
        mint::decimals = 0,
        mint::authority = authority,
        mint::freeze_authority = authority,
    )]
    pub mint: Account<'info, Mint>,

    #[account(
        init,
        payer = authority,
        associated_token::mint = mint,
        associated_token::authority = authority,
    )]
    pub token_account: Account<'info, TokenAccount>,

    /// CHECK: Metaplex metadata account
    #[account(mut)]
    pub metadata_account: UncheckedAccount<'info>,

    pub token_program: Program<'info, Token>,
    pub associated_token_program: Program<'info, anchor_spl::associated_token::AssociatedToken>,
    pub token_metadata_program: Program<'info, Metadata>,
    pub system_program: Program<'info, System>,
    pub rent: Sysvar<'info, Rent>,
}

pub fn mint_student_nft(
    ctx: Context<MintStudentNFT>,
    uri: String,
    name: String,
    symbol: String,
) -> Result<()> {
    // 1. Mint the token
    let cpi_accounts = MintTo {
        mint: ctx.accounts.mint.to_account_info(),
        to: ctx.accounts.token_account.to_account_info(),
        authority: ctx.accounts.authority.to_account_info(),
    };
    let cpi_program = ctx.accounts.token_program.to_account_info();
    let cpi_ctx = CpiContext::new(cpi_program, cpi_accounts);
    token::mint_to(cpi_ctx, 1)?;

    // 2. Create Metadata
    let cpi_context = CpiContext::new(
        ctx.accounts.token_metadata_program.to_account_info(),
        CreateMetadataAccountsV3 {
            metadata: ctx.accounts.metadata_account.to_account_info(),
            mint: ctx.accounts.mint.to_account_info(),
            mint_authority: ctx.accounts.authority.to_account_info(),
            payer: ctx.accounts.authority.to_account_info(),
            update_authority: ctx.accounts.authority.to_account_info(),
            system_program: ctx.accounts.system_program.to_account_info(),
            rent: ctx.accounts.rent.to_account_info(),
        },
    );

    let data_v2 = DataV2 {
        name,
        symbol,
        uri,
        seller_fee_basis_points: 0,
        creators: None,
        collection: None,
        uses: None,
    };

    create_metadata_accounts_v3(
        cpi_context,
        data_v2,
        true, // is_mutable
        true, // update_authority_is_signer
        None, // collection details
    )?;

    msg!("Student NFT Minted!");
    Ok(())
}
