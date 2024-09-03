#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>

// Função para obter o timestamp atual
void get_current_timestamp(char *buffer, size_t buffer_size) {
    time_t now = time(NULL);
    struct tm *t = localtime(&now);
    strftime(buffer, buffer_size - 1, "%Y-%m-%d %H:%M:%S", t);
}

// Função para registrar uma query SQL em um arquivo de log
void log_sql_query(const char *query, const char *params, const char *status, const char *error_message) {
    FILE *log_file = fopen("queries.log", "a");
    if (log_file == NULL) {
        perror("Erro ao abrir o arquivo de log");
        return;
    }

    char timestamp[20];
    get_current_timestamp(timestamp, sizeof(timestamp));

    if (error_message == NULL) {
        fprintf(log_file, "[%s] [%s] Executando query: %s [PARAMS: %s]\n", timestamp, status, query, params);
    } else {
        fprintf(log_file, "[%s] [%s] Falha ao executar query: %s [PARAMS: %s] - ERROR: %s\n", timestamp, status, query, params, error_message);
    }

    fclose(log_file);
}

int main() {
    // Exemplo de uso da função de log
    log_sql_query("SELECT * FROM users WHERE id = ?", "42", "INFO", NULL);
    log_sql_query("UPDATE orders SET status = 'shipped' WHERE id = ?", "128", "INFO", NULL);
    log_sql_query("INSERT INTO payments (user_id, amount) VALUES (?, ?)", "42, 99.99", "ERROR", "Duplicate entry '42' for key 'PRIMARY'");
    log_sql_query("DELETE FROM sessions WHERE session_id = ?", "'abcdef12345'", "INFO", NULL);
    log_sql_query("SELECT * FROM products WHERE category = ? AND price < ?", "'electronics', 500", "INFO", NULL);

    printf("Logs gravados com sucesso!\n");
    return 0;
}
