import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  SlashCommandBuilder,
} from "discord.js";
import bot from "..";
import env from "../utils/env";

bot.addGlobalCommand(
  new SlashCommandBuilder().setName("devtools").setDescription("secret sauce"),
  (interaction) => {
    if (!interaction.isCommand()) return;
    const developers = env.DEVELOPERS.split(" ");
    if (!developers.includes(interaction.user.id))
      return interaction.reply({
        content: "There is no spoon",
        ephemeral: true,
      });
    const actionRow = new ActionRowBuilder<ButtonBuilder>().addComponents([
      new ButtonBuilder()
        .setCustomId("devtools:role-select")
        .setLabel("Send role select menu")
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("devtools:message-set")
        .setLabel("Send message set menu")
        .setStyle(ButtonStyle.Secondary),
    ]);
    return interaction.reply({ components: [actionRow], ephemeral: true });
  }
);
