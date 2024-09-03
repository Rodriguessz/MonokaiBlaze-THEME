package main

import (
	"encoding/json"
	"fmt"
	"os"
)

// ThemeColor define uma cor com suas propriedades
type ThemeColor struct {
	Foreground string `json:"foreground"`
	Background string `json:"background,omitempty"`
	Bold       bool   `json:"bold,omitempty"`
	Italic     bool   `json:"italic,omitempty"`
}

// Theme define o esquema de cores do tema
type Theme struct {
	Name    string                 `json:"name"`
	Type    string                 `json:"type"`
	Colors  map[string]string      `json:"colors"`
	TokenColors []map[string]interface{} `json:"tokenColors"`
}

func main() {
	// Defina suas cores principais aqui
	colors := map[string]string{
		"editor.background": "#272822",
		"editor.foreground": "#F8F8F2",
		// Adicione mais cores conforme necessário
	}

	// Defina cores específicas para tokens (palavras-chave, funções, etc.)
	tokenColors := []map[string]interface{}{
		{
			"scope": "keyword",
			"settings": ThemeColor{
				Foreground: "#F92672",
				Bold:       true,
			},
		},
		{
			"scope": "string",
			"settings": ThemeColor{
				Foreground: "#E6DB74",
			},
		},
		// Adicione mais tokens conforme necessário
	}

	// Crie o tema
	theme := Theme{
		Name:   "Meu Tema Customizado",
		Type:   "dark", // ou "light"
		Colors: colors,
		TokenColors: tokenColors,
	}

	// Converta para JSON
	themeJSON, err := json.MarshalIndent(theme, "", "  ")
	if err != nil {
		fmt.Println("Erro ao gerar o JSON do tema:", err)
		return
	}

	// Salve o tema em um arquivo
	file, err := os.Create("meu-tema.json")
	if err != nil {
		fmt.Println("Erro ao criar o arquivo:", err)
		return
	}
	defer file.Close()

	file.Write(themeJSON)

	fmt.Println("Tema criado com sucesso!")
}
